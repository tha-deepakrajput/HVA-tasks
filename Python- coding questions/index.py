a = int(input())
b = int(input())

if a > b : 
  greatest = a 
else : 
  greatest = b 

lcm = 1
i = 2
while greatest > 0 : 
  if a % i == 0 :
    a = a // i 
    if b % i == 0 : 
      b = b // i 
      lcm *= i 
      greatest = greatest // i z
    else : 
      i += 1
  else : 
    i += 1
    
print(lcm)