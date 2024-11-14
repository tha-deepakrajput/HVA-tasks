# arr = list(map(int, input().split()))
# t = int(input("Target sum : "))

# count = 0
# arr1 = []
# i = 0 
# while i < len(arr) : 
#     j = i
#     while j < len(arr) : 
#         arr1 += [arr[j]]
#         # print(arr1)
#         sum = 0
#         k = 0
#         while k < len(arr1) :
#             sum += arr1[k]
#             k += 1
#         if sum == t : 
#             count += 1
#             print(arr1)
#             break
#         j += 1
#     i += 1
#     arr1 = []
        
# if count != 1 : 
#     print("Not Possible")

arr = list(map(int, input().split()))
t = int(input("Target sum : "))

n = len(arr)
start = 0
end = 0
current_sum = 0
min_length = 89749599958
min_subArray = 999994875

end = 0
while end < n : 
    current_sum += arr[end]
    # Here if the current_sum would be greater than the target sum and start is less than equal to end then we will subtract the starting element from the current_sum
    while current_sum > t and start <= end : 
        current_sum -= arr[start]
        start += 1
    # check the current_sum is equal to the target sum or not 
    if current_sum == t : 
        if end - start + 1 < min_length : 
            min_length = end - start + 1
            min_subArray = arr[start:end + 1]
    end += 1

if min_subArray : 
    print(f"Smallest Subarray : {min_subArray}")
else : 
    print("Not Possible")