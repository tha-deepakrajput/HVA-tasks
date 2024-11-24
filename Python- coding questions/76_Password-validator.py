s = input('Enter the password : ')

symbols = "!@#$%^&*(),.<>?\":{|}"
lowerCase = False
upperCase = False 
numCase = False 
symCase = False

if len(s) >= 8 : 
    for char in s : 
        if 'a' <= char <= 'z' :
            lowerCase = True
        elif 'A' <= char <= 'Z' : 
            upperCase = True
        elif '0' <= char <= '9' : 
            numCase = True 
        elif char in symbols : 
            symCase = True 

if lowerCase and upperCase and numCase and symCase : 
    print('Yes')
else :
    print('No')