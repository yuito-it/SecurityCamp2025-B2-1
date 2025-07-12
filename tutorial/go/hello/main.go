package main

import (
	"fmt"

	"example.com/greetings"
)

func main() {
	message := greetings.Hello("Yutaka")
	fmt.Println(message)
}
