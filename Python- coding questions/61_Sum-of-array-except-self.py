arr = list(map(int, input("Enter the array : ").split()))

count = 0
i = 0
while i < len(arr) : 
    sum = 0
    j = 0
    while j < len(arr) : 
        if j == i : 
            count += 1
        else : 
            sum += arr[j]
        j += 1
    i += 1
    print(sum)

