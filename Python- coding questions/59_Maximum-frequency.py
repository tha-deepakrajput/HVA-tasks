arr = list(map(int, input().split()))

len = len(arr)

max_count = 0
max_val = 0
i = 0 
while i < len : 
    count = 0
    j = 0
    while j < len : 
        if arr[j] == arr[i] : 
            count += 1
        j += 1
    if count > max_count : 
        max_count = count
        max_val = arr[i]

    i += 1

print("max-frequency : ", max_count, "Value : ", max_val)
        