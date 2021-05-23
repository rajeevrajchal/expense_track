import { NextApiRequest, NextApiResponse } from 'next';
import { tokenVerification } from '@middleware/token.verification';
import expenseModel from 'models/expense.model';
import { dbConnect } from '@plugins/db.mongo';
import { $FIXME } from '@utils/constant';

// eslint-disable-next-line consistent-return
const storeExpense = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();
    const verified: $FIXME = await tokenVerification(req);
    console.log(verified);
    if (!verified.status) {
      return res.status(401).json({
        message: verified.message,
      });
    }
    const expense = await expenseModel.create({
      name: req.body.name,
      category: req.body.category,
      amount: req.body.amount,
      date: req.body.date,
      user_id: req.body.user_id,
    });
    if (expense) {
      return res.status(201).json({
        message: 'Expense Created.',
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
    case 'POST':
      return storeExpense(req, res);
    default:
      return res.status(400).json({ message: 'Bad Request' });
  }
}
