arr = list(map(int, input().split()))

i = 0
while i < len(arr) : 
    count = 0
    j = 0
    while j < len(arr) : 
        if arr[j] == arr[i] : 
            count += 1
        j += 1
        
    # print(arr[i], "-", count)
    i += 1