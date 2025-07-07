// TODO: реалізуйте клас або інтерфейс тут
export class DocumentBuilder {
  private header: string | null = null;
  private body: string | null = null;
  private footer: string | null = null;

  public addHeader(text: string): this {
    this.header = text;
    return this;
  }

  public addBody(text: string): this {
    this.body = text;
    return this;
  }

  public addFooter(text: string): this {
    this.footer = text;
    return this;
  }

  public build(): string {
    const parts: string[] = [];

    if (this.header) {
      parts.push(`=== ${this.header} ===`);
    }

    if (this.body) {
      parts.push(this.body);
    }

    if (this.footer) {
      parts.push(this.footer);
    }

    return parts.join("\n\n");
  }
}

