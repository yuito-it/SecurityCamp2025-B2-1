package greetings

import (
	"errors"
	"fmt"
)

func Hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("名前が空です")
	}
	message := fmt.Sprintf("Hi, %v. Welcome!", name)
	return message, nil
}
