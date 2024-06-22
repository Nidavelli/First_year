import random
# Generate a random number between 100 and 899
print(random.randrange(100, 900))

i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)