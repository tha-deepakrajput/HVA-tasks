arr = list(map(int, input().split()))

total_sum = 0
i = 0
while i < len(arr) : 
    j = i
    while j < len(arr) : 
        subArray = []
        k = i
        subarray_sum = 0
        while k <= j : 
            subArray += [arr[k]]
            subarray_sum += arr[k]
            k += 1
        total_sum += subarray_sum
        print(subArray)
        j += 1
    i += 1
print("sum : ", total_sum)


