export class History {
  constructor(name) {
    this.name = name;
    this.coders = {};
    this.files = {};
  }

  deleteFile(name) {
    delete this.files[name];
  }

  getCoder(name) {
    return this.coders[name];
  }

  getFile(name) {
    return this.files[name];
  }

  putCoder(coder) {
    this.coders[coder.name] = coder;
    coder.setHistory(this);
  }

  putFile(file) {
    this.files[file.name] = file;
    file.setHistory(this);
  }

  renameFile(from, to) {
    if (this.files[to]) this.deleteFile(to);

    const file = this.files[from];
    this.files[to] = file;
    delete this.files[from];

    file.setName(to);
  }
}
