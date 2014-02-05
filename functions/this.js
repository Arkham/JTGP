var myObj = {
  property: "foobar",

  log_this: function () {
    console.log(this.property);
    console.log(this);

    var log_this_ception = function () {
      console.log(this);
    }

    log_this_ception();
  }
}

myObj.log_this();
