export interface Database<T> {
  getAll(): Promise<T[]>;
  //....
}
