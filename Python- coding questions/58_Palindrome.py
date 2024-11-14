arr = list(map(int, input().split()))

count = 0
a = len(arr)
j = a - 1
i = 0
while i < j : 
    t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
    if arr[i] == arr[j] : 
        count += 1
    else : 
        print("No")
        exit()
    i += 1
    j -= 1
if i == count : 
    print("yes")
