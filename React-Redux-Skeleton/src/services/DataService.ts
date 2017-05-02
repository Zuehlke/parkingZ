import { Observable } from "rxjs";
import { ajax } from 'rxjs/observable/dom/ajax';

export class DataService {

    private baseUrl = "http://localhost:5000";
    private headers = { 'Content-Type': 'application/json' };

    fetchExpenses(): Observable<Expense[]> {
        return ajax.getJSON<Expense[]>(this.baseUrl + "/api/expenses", this.headers);
    }

    fetchExpense(id: string): Observable<Expense> {
        return ajax.getJSON<Expense>(`${this.baseUrl}/api/expenses/${id}`);
    }

    updateExpense(expense: Expense): Observable<{}> {
        return ajax.put(`${this.baseUrl}/api/expenses/${expense.id}`, expense, this.headers).map(ajaxResponse => {
            return ajaxResponse.response as {};
        });
    }

    addExpense(expense: Expense): Observable<string> {
        return ajax.post(`${this.baseUrl}/api/expenses/${expense.id}`, expense, this.headers).map(ajaxResponse => {
            return ajaxResponse.response as string;
        });
    }

    deleteExpense(id: string): Observable<string> {
        return ajax.delete(`${this.baseUrl}/api/expenses/${id}`, this.headers).map(ajaxResponse => {
            return id;
        });
    }
}