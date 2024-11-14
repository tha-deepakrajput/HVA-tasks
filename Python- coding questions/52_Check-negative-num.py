num = list(map(int, input().split()))

count = 0
i = 0 
while i < len(num) :
    if num[i] < 0 : 
        count += 1
        break
    i += 1
if count == 1 : 
    print("Yes")
else : 
    print("No")
