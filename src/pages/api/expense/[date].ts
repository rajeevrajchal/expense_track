import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@plugins/db.mongo';
import moment from 'moment';
import expenseModel from '@models/expense.model';
import { tokenVerification } from '@middleware/token.verification';
import { $FIXME } from '@utils/constant';

// eslint-disable-next-line consistent-return
const getExpenses = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();
    const queryDate = req.query.date;
    const startOfDay = moment(queryDate).startOf('day');
    const endOfDay = moment(queryDate).endOf('day');
    console.log('startOfDay', startOfDay);
    const verified: $FIXME = await tokenVerification(req);
    if (!verified.status) {
      return res.status(401).json({
        message: verified.message,
      });
    }
    console.log('user_id', verified.user._id);
    const expenses = await expenseModel.find({
      user_id: verified.user._id,
      createdAt: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
    });
    console.log(expenses);
    if (expenses) {
      return res.status(200).json({
        message: 'Expense Fetched.',
        expenses,
      });
    }
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getExpenses(req, res);
    default:
      return res.status(400).json({ message: 'Bad Request' });
  }
}
