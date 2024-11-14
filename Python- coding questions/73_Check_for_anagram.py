str1 = input()
str2 = input()

str1 = str1.lower()
str2 = str2.lower()

removeSpace_str1 = ''
removeSpace_str2 = '' 

for char in str1 : 
    if char != ' ' : 
        removeSpace_str1 += char

for char in str2 : 
    if char != ' ' : 
        removeSpace_str2 += char 

# sort_str1 = sorted(removeSpace_str1)
# sort_str2 = sorted(removeSpace_str2)

# if len(removeSpace_str1) != len(removeSpace_str2) : 
#     print(f"${str1} and ${str2} are not the Anagrams")
# else : 
#     if sort_str1 == sort_str2 : 
#         print(f"{str1} and {str2} are the Anagram")


if len(removeSpace_str1) != len(removeSpace_str2) : 
    print(f"{str1} and {str2} are not Anagrams")
else : 
    isAnagram = True 
    for char in removeSpace_str1 : 
        count1 = 0
        count2 = 0 

        for c in removeSpace_str1 : 
            if c == char : 
                count1 += 1

        for c in removeSpace_str2 : 
            if c == char : 
                count2 += 2 

        if count1 != count2 : 
            isAnagram = False
            break                
if isAnagram : 
    print("yes")
else : 
    print("No")