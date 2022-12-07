# Caution you can't do this exercise in Javascript (if you want to passes the tests), the debug cannot be modified, because it is not done in Javascript.
# You have to do it in other language like Java 7 or Python3. This solution is in Python3
def strings_xor(s, t):
    res = ""
    for i in range(len(s)):
        if s[i] == t[i]:
            res += '0'
        else:
            res += '1'

    return res

s = input()
t = input()
print(strings_xor(s, t))
