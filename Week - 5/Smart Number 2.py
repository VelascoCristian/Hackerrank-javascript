#Another debug exercise, you will get an error if you try to do it in JavaScript,
# so you need to do it in python, Java or C++.
def is_smart_number(num):
    val = int(math.sqrt(num))
    if num / val == val:
        return True
    return False