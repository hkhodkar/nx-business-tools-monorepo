export interface ExpenseDto {
  id: string | null;
  title: string;
  amount: number;
  vatPercentage: number;
  date?: string;
  tags?: string[];
}
export interface ExpenseModel {
  id: string | null;
  description: string;
  amount: {
    amountExclVat: number;
    vatPercentage: number;
  };
  date?: string;
  tags?: string[];
}
