num = list(map(int, input().split()))

a = 0
count = 0
i = 0
while i < len(num) :
    a = num[i] ** 0.5
    if a == int(a): 
        count += 1
        break
    i += 1

if count == 1 : 
    print(num[i])
else : 
    print("No")


# 10 8 14 11 6 15
