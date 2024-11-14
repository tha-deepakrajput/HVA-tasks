num = list(map(int, input().split()))
k = int(input("Enter the value of K : "))

count = 0
i = 0
while i < len(num) :
    if num[i] > k :
        count += 1
        break
    i += 1

if count == 1 : 
    print(num[i])
else : 
    print("No")

