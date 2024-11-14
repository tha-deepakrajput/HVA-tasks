arr = list(map(int, input().split()))

n = len(arr)
count = 0
i = 0
while i < n - 1 : 
    j = i + 1
    while j < n : 
        if arr[i] == arr[j] : 
            print(arr[i])
            count += 1
        j += 1
    if count == 1 : 
        break
    i += 1