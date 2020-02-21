const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    if(value == undefined) {
      this.chainArr.push('( null )')
    } else {
      this.chainArr.push('( ' + value + ' )');
    }

    return this;
  },

  removeLink(position) {
    if((typeof position) != 'number' || position <= 0 || position > this.chainArr.length || !Number.isInteger(position)) {
      this.chainArr = [];
      throw new Error();
    }
    this.chainArr.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    let chain = '';
    if(this.chainArr.length > 1) {
      for( let i = 0; i < this.chainArr.length; i++ ) {
        if(i != this.chainArr.length - 1 ) {
          chain += this.chainArr[i];
          chain += '~~';
        } else {
          chain += this.chainArr[i];
        }
      }
    } else {
      chain = this.chainArr[0];
    }

    this.chainArr = [];

    return chain;
  }
};

module.exports = chainMaker;
