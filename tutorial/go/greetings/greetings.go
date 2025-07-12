package greetings

import "fmt"

func Hello(name string) string {
	// 関数を代入している
	message := fmt.Sprintf("Hi, %v. Welcome!", name)
	return message
}
