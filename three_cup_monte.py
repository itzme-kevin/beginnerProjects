from random import shuffle
def shuffle_cup(list1):
    shuffle(list1)
    input_guess(list1)
def input_guess(list1):
    guess=int(input())
    while guess not in [0,1,2]:
         guess=int(input("enter 0|1|2 "))
        if check(list1,guess)!=1:
        shuffle_cup(list1)
    
def check(list1,guess):
    if list1[guess]=='ball':
        print("correct")
        return 1
    else:
        print("wrong guess")
        print(list1)
        return (0,list1)
list1=['ball','',''] 
shuffle_cup(list1)  
