interface Storage {
  [key: string]: any;
}

export class Queue {
  private storage: Storage = {} as Storage;
  private queue: string[] = [];
  private limit: number = -1;

  constructor(limit: number) {
    this.limit = limit;
  }

  /**
   * Grab an item out of queue storage by its key
   * @param key
   * @returns queue item
   */
  public item(key: string): any {
    return this.storage[key];
    // Idea: 'refresh' position to end of queue when grabbing an item
  }

  public push(key: string, item: any) {
    // Not replacing storage entry, shouldn't be pushing new data to the same key
    if (this.item(key)) return;

    this.storage[key] = item;
    this.queue.push(key);

    // Shift if the queue is full; -1 limit is unlimited
    if (this.limit !== -1 && this.queue.length > this.limit) {
      this.shift();
    }
  }

  public shift() {
    if (!this.queue.length) return;
    const key = this.queue.shift()!;
    const item = this.storage[key];
    delete this.storage[key]
    return item;
  }
}