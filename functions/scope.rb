foo = -> {
  a = 3
  b = 5

  bar = -> {
    b = 7
    c = 11

    puts "inside bar: #{a}, #{b}, #{c}"

    a += b + c

    puts "inside bar: #{a}, #{b}, #{c}"
  }

  puts "before bar: #{a}, #{b}"

  bar.()

  puts "after bar: #{a}, #{b}"
}

foo.()
