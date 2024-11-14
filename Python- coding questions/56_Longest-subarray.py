arr = list(map(int, input().split()))

max_len1 = 1
max_len2 = 0

i = 1
while i < len(arr) :
    if arr[i] > arr[i - 1] : 
        max_len1 += 1
    else : 
        max_len1 = 1
    
    # To find the maximum length of the subarray.
    if max_len2 > max_len1 :
        max_len2 = max_len2
    else : 
        max_len2 = max_len1
    i += 1

print(max_len2)