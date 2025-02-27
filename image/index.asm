.data                          ;this is where varables and text lise massage are stored
mag: .asciiz "hello, world!\n"

.text                           ;this is where the actural programs runs 
.globl main
main:

    li $v0, 4          ;preper to print the string 

    la $a0, mag          ;load adress of massage into $a0               loads the massages into registers
     syscall            ;make the system call                            print the massage 

    li $v0, 10            ;load exit the system call                     preper to exit the program
     syscall             ;Exit                                            ends the programs 




