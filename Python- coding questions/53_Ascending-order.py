num = list(map(int,input().split()))

a = len(num)
count = 0
i = 0
while i < a - 1 :
    if num[i] > num[i + 1] :
        count += 1
        break
    i += 1

if count == 1 : 
    print("No")
else : 
    print("Yes")

