import time

number = 7

#print("guess a number: ")
guess = input("guess a number: ")

while True:
    if guess == number:
        print("good job, you guessed correctly")
        break

    elif guess != number:
        print("wrong, try again:")
    
    guess = input()