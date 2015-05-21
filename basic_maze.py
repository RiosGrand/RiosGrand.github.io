from gopigo import
import time
import math

set_spped(100)

def move_foward(feet):
  mm = 304.8*feet
  steps = int(mm/11.34)
  enc_tgt(1,1,steps)
  time.sleep(.1)
  fwd()
  time.sleep(feet*2)
  
def move_left():
  enc_tgt(0,1,15)
  time.sleep(.1)
  left()
  time.sleep(2)
  
def move right():
  enc_tgt(1,0,15)
  time.sleep(.1)
  right()
  time.sleep(2)


move_foward(4)
move right()
move_foward(3)
move_right()
move_foward(2)
move_left()
move_left()
move_foward(2)
