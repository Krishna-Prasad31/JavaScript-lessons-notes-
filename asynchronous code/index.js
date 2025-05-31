function func1(callback) {
  setTimeout(() => {console.log("func1");
    callback();
  }, 4000)
}

function func2() {
  console.log("func2")
  console.log("func3")
  console.log("func4")
}

func1(func2)