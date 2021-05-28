function LazyQuery( arr ) {
  this._resource = arr;
  this._queue = [];
}

LazyQuery.prototype.map = function ( handler ) {
  this._queue.push( handler );
  return this;
}


LazyQuery.prototype.all = function () {
  let _res = this._resource.map( item => 
    this._queue.reduce( (r, fn) => fn(r), item )
  );
  return _res;
}

module.exports = LazyQuery;