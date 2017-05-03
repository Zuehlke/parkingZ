import { Observable } from "rxjs";
import { ajax } from 'rxjs/observable/dom/ajax';

export class DataService {

    private baseUrl = "http://localhost:4001/graphql";
    private headers = { 'Content-Type': 'application/json' };

    fetchBuildings(): Observable<Building[]> {
        let query: string = `{ buildings {
                                _id
                                name
                                levels {
                                    _id
                                    name
                                    level
                                    parkingLots {
                                        _id
                                        number
                                        status
                                        type
                                    }
                                }
                            }}`;
        return ajax.getJSON<Building[]>(this.baseUrl + "?query=" + encodeURIComponent(query));
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