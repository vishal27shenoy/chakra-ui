import { Flex, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const natureProfile =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTk4LjgzNyA3LjM2MmMtMi44NjggMC00LjU3MyAxLjc4My01LjE5NCAzLjU2NmgtLjA3N3YtMy40MWgtLjA3OEw4OS41MzUgOC42OGMuNTQzLjY5Ny45MyAyLjMyNS45MyA0LjE4NXYxMi42MzJjMCAxLjc4My0uMDc3IDMuOTUzLS40NjUgNS41MDNoNC4xMDljLS4zODgtMS41NS0uNDY2LTMuNDEtLjQ2Ni01LjUwM3YtMS4xNjJjMS4xNjMuMzg3IDIuMDkzLjU0MyAzLjQxMS41NDMgNS44OTIgMCA4LjIxNy00LjcyOCA4LjIxNy05LjMgMC01LjQyNS0yLjcxMy04LjIxNS02LjQzNC04LjIxNXpNOTcuMDU0IDIzLjI1Yy0xLjcwNSAwLTIuNzEzLS42OTgtMy40MS0xLjM5NVYxMS41NDdjLjc3NS0xLjE2MiAyLjAxNS0xLjg2IDMuNzItMS44NiAzLjE3OSAwIDQuNTc0IDIuMDkzIDQuNTc0IDYuMjc4IDAgNC42NS0xLjM5NSA3LjI4NS00Ljg4NCA3LjI4NXptMTcuNTItMTUuODFjLTQuMDMxIDAtNy43NTIgMy40MS03Ljc1MiA4LjgzNSAwIDUuMTE1IDMuNTY2IDguNjAzIDguMDYyIDguNjAzIDQuMDMgMCA3Ljc1Mi0zLjQxIDcuNzUyLTguODM1IDAtNS4xMTUtMy40ODktOC42MDMtOC4wNjItOC42MDN6bS4zMSAxNS44ODdjLTIuNzEzIDAtNC41NzQtMi4wOTItNC41NzQtNy4zNjIgMC01LjAzNyAxLjYyOC02Ljk3NSA0LjI2NC02Ljk3NSAyLjcxMyAwIDQuNTczIDIuMDkyIDQuNTczIDcuMzYyIDAgNS4wMzgtMS42MjggNi45NzYtNC4yNjMgNi45NzZ6bTE2Ljg5OS0xNS45NjVjLTIuMjQ4IDAtMy42NDMgMS4zOTYtNC4yNjQgNC4xMDhoLS4wNzdWNy41MTdsLTMuOTU0IDEuMTYzYy41NDMuNjk3LjkzIDIuMzI1LjkzIDQuMTg1djYuMTIzYzAgMS43ODItLjA3NyAzLjk1Mi0uNDY1IDUuNThoNC4wMzFjLS4zODctMS40NzMtLjM4Ny0zLjQ4OC0uMzg3LTUuNTAzdi01LjI3YzAtMi4wOTIgMS4xNjMtMy44NzUgMi40OC0zLjg3NS40NjYgMCAuNzc2LjMxIDEuMDg2LjY5Ny4zMS4zMS42Mi42MiAxLjMxOC42MiAxLjA4NSAwIDEuNjI4LS42MiAxLjYyOC0xLjc4Mi0uMDc4LTEuMzk1LTEuMDg2LTIuMDkzLTIuMzI2LTIuMDkzem0xOC4zNzIgMi40MDNoMy41NjZsLjM4OC0xLjkzOGgtMy45NTR2LTIuNzljMC0yLjU1NyAxLjA4NS0zLjQ4NyAyLjQ4LTMuNDg3LjY5OCAwIDEuMDA4LjMxIDEuMjQxIDEuMTYyLjMxIDEuMDA4Ljc3NSAxLjQ3MyAxLjYyOCAxLjQ3My44NTMgMCAxLjQ3My0uNjIgMS40NzMtMS41NSAwLTEuNDcyLTEuNDczLTIuNDgtMy44NzYtMi40OC0zLjQ4OSAwLTYuMDQ3IDIuMjQ4LTYuMDQ3IDYuNTFWNy43NUgxNDBWNC40MThoLS4wNzhsLTUuMDM4IDUuMjd2LjA3N2gxLjkzOHYxMC40NjJjMCAzLjE3OCAxLjM5NSA0LjY1IDQuNDE4IDQuNjUgMS43ODMgMCAyLjk0Ni0uNzc0IDMuNDExLTEuODYuMTU1LS4zODcuMTU1LS42Mi4yMzMtMS4wMDctLjYyLjMxLTEuMzk2LjQ2NS0yLjQ4LjQ2NS0xLjQ3NCAwLTIuNDgyLS42OTgtMi40ODItMi40OFY5Ljc2NWg3LjA1NXY5LjIyM2MwIDEuNzgyLS4wNzggMy45NTItLjQ2NSA1LjU4aDQuMjYzYy0uNDY1LTEuNTUtLjYyLTMuNzItLjYyLTUuNThWOS43NjR6Ii8+PHBhdGggZD0iTTE2MS4zMTggNy40NGMtNC4wMzEgMC03Ljc1MiAzLjQxLTcuNzUyIDguODM1IDAgNS4xMTUgMy41NjYgOC42MDMgOC4wNjIgOC42MDMgNC4wMyAwIDcuNzUyLTMuNDEgNy43NTItOC44MzUgMC01LjExNS0zLjQ4OS04LjYwMy04LjA2Mi04LjYwM3ptLjMxIDE1Ljg4N2MtMi43MTMgMC00LjU3NC0yLjA5Mi00LjU3NC03LjM2MiAwLTUuMDM3IDEuNjI4LTYuOTc1IDQuMjY0LTYuOTc1IDIuNzEzIDAgNC41NzMgMi4wOTIgNC41NzMgNy4zNjIuMDc4IDUuMDM4LTEuNjI3IDYuOTc2LTQuMjYzIDYuOTc2em0xMi45NDYtMTkuMDY1YzAtLjMxLjA3Ny0zLjcyLjA3Ny00LjI2MmgtLjA3N2wtNC4wMzEgMS4xNjNjLjU0Mi42OTcuOTMgMi4zMjQuOTMgNC4xODVWMTguOTFjMCAxLjc4Mi0uMDc4IDMuOTUzLS40NjUgNS41OGg0LjEwOGMtLjQ2NS0xLjYyNy0uNDY1LTMuNzk3LS40NjUtNS41OFY0LjI2MmgtLjA3N3ptNy4wNTQgNy4yODVsLjA3Ny00LjAzLTQuMTA4IDEuMTYzYy41NDMuNjk3LjkzIDIuMzI1LjkzIDQuMTg1djYuMTIzYzAgMS43ODItLjA3NyAzLjk1Mi0uNDY1IDUuNThoNC4xMDljLS40NjYtMS42MjgtLjQ2Ni0zLjc5OC0uNDY2LTUuNTh2LTcuNDRoLS4wNzd6bS0xLjc4My02LjM1NWMxLjI0IDAgMi4wOTMtLjkzIDIuMDkzLTIuMDE0IDAtMS4xNjMtLjg1My0yLjAxNS0yLjA5My0yLjAxNS0xLjE2MyAwLTIuMDE2LjkzLTIuMDE2IDIuMDE0IDAgMS4wODYuODUzIDIuMDE1IDIuMDE2IDIuMDE1em0xMS44NiAyLjI0OGMtNC4wMyAwLTcuNzUyIDMuNDEtNy43NTIgOC44MzUgMCA1LjExNSAzLjU2NiA4LjYwMyA4LjA2MyA4LjYwMyA0LjAzIDAgNy43NTEtMy40MSA3Ljc1MS04LjgzNSAwLTUuMTE1LTMuNTY1LTguNjAzLTguMDYyLTguNjAzem0uMzEgMTUuODg3Yy0yLjcxMyAwLTQuNTczLTIuMDkyLTQuNTczLTcuMzYyIDAtNS4wMzcgMS42MjgtNi45NzUgNC4yNjMtNi45NzUgMi43MTQgMCA0LjU3NCAyLjA5MiA0LjU3NCA3LjM2MiAwIDUuMDM4LTEuNjI4IDYuOTc2LTQuMjYzIDYuOTc2ek0xNS41MDUgMTIuNGMwLTMuMzMyLTEuMDA4LTUuMDM4LTQuNDk2LTUuMDM4LTIuMzI2IDAtNC4yNjQgMS4wODUtNS4zNSAzLjcyaC0uMDc3VjcuNTE4bC0uMDc3LS4wNzdMMCA4Ljk5Yy42OTguNzc1IDEuMjQgMi4yNDggMS4yNCAzLjg3NXY2LjA0NWMwIDIuMDE1LS4wNzcgNC4wMy0uNjIgNS41OGg1LjY2Yy0uNDY2LTEuNDczLS41NDQtMy4yNTUtLjU0NC01LjQyNXYtNy40NGMuNzc2LS42OTcgMS42MjgtMS4wMDggMi45NDYtMS4wMDggMS42MjggMCAyLjMyNi42MiAyLjMyNiAyLjE3djYuMjc4YzAgMi4xNy0uMDc4IDMuOTUyLS41NDMgNS40MjVoNS42NTljLS40NjUtMS41NS0uNjItMy41NjUtLjYyLTUuNThWMTIuNHptMTQuNjUxIDcuNTk1di03LjM2M2MwLTMuNTY0LTEuNjI4LTUuMjctNS45NjktNS4yNy0zLjMzMyAwLTYuNTkgMS42MjgtNi41OSAzLjk1MyAwIDEuMTYyLjg1NCAxLjc4MyAxLjg2MSAxLjc4MyAxLjA4NiAwIDEuNzgzLS41NDMgMi4wOTMtMi4yNDguMjMzLTEuMDg1LjYyLTEuNTUgMS43ODMtMS41NSAxLjc4MyAwIDIuNDAzLjkzIDIuNDAzIDIuODY3di4zMWMwIDEuNzA1LTEuMzE3IDIuNDAzLTMuNzIgMy4zMzMtMi41NTkgMS4wMDctNC45NjIgMi4wOTItNC45NjIgNC44MDUgMCAyLjU1OCAxLjcwNiA0LjE4NSA0LjQxOSA0LjE4NSAyLjE3IDAgMy42NDMtLjkzIDQuMzQxLTMuMWguMDc3Yy4wNzggMS42MjggMS4xNjMgMy4xIDMuMzM0IDMuMSAxLjg2IDAgMi43OS0uOTMgMy4yNTYtMi4zMjUuMDc3LS4zMS4xNTUtLjU0My4yMzItMS4wODUtLjIzMi4xNTUtLjY5Ny4yMzItLjkzLjIzMi0xLjA4NS4xNTUtMS42MjgtLjIzMi0xLjYyOC0xLjYyN3ptLTQuNTc0IDEuMzE3Yy0uMzEuNjk4LS43NzUgMS4xNjMtMi4wOTMgMS4xNjMtMS4zMTcgMC0yLjA5My0uOTMtMi4wOTMtMi40MDIgMC0xLjc4My41NDMtMi42MzYgMi4xNy0zLjQxIDEuMjQxLS42MiAxLjcwNi0uODUzIDIuMDE2LTEuMzk2djYuMDQ2em0xMi4yNDgtMS45Mzd2LTkuMDY4aDMuNzk5bC4zMS0yLjU1N2gtNC4xODZWMy43OTdoLS4xNTVsLTYuMzU3IDYuMzU2LS4wNzcuMTU0aDIuMTd2OS43NjZjMCAzLjE3NyAxLjU1IDQuODgyIDQuODA3IDQuODgyIDIuMzI1IDAgMy40MS0uODUyIDQuMDMtMi4xNy4yMzMtLjQ2NS4zMS0uNzc1LjM4OC0xLjM5NS0uNjIuMzEtMS4zMTguNDY1LTIuMzI1LjQ2NS0xLjU1IDAtMi40MDQtLjY5OC0yLjQwNC0yLjQ4em0xOS45MjMtMTEuNzhsLTUuMTk0LjU0MmMuNTQzIDEuNDczLjY5OCAyLjk0NS42OTggNC42NXY3LjgyOGMtLjYyLjg1My0xLjcwNiAxLjMxOC0zLjEwMSAxLjMxOC0xLjcwNSAwLTIuNDAzLTEuMDA4LTIuNDAzLTIuNzEzVjcuNTk1bC01LjExNi41NDJjLjU0MiAxLjQ3My42OTcgMi45NDUuNjk3IDQuNjV2Ni41ODhjMCAzLjMzMiAxLjMxOCA1LjUwMyA1LjA0IDUuNTAzIDIuOTQ1IDAgNC4yNjMtMS41NSA0Ljk2LTMuNzJoLjA3OHYzLjMzMmg1LjAzOWMtLjM4OC0xLjI0LS42OTgtMi40MDItLjY5OC01LjAzN1Y3LjU5NXptMTMuOTUzIDIuMDkzYzAtMS40NzMtLjg1Mi0yLjMyNi0yLjU1OC0yLjMyNi0yLjA5MyAwLTMuNDg4IDEuNDczLTQuMTg2IDQuNDk1aC0uMDc3di00LjM0bC0uMDc4LS4wNzctNS40MjYgMS41NWMuNjk4Ljc3NSAxLjI0IDIuMjQ4IDEuMjQgMy44NzV2Ni4wNDVjMCAyLjAxNS0uMTU1IDQuMDMtLjYyIDUuNThoNS43MzZjLS40NjUtMS40NzMtLjYyLTMuNDg3LS42Mi01LjczNXYtNC4wM2MwLTIuNTU3IDEuMDA4LTQuMTA3IDEuOTM4LTQuMTA3LjY5OCAwIDEuMDg2IDEuMzE3IDIuNjM2IDEuMzE3IDEuMDA4IDAgMi4wMTUtLjkzIDIuMDE1LTIuMjQ4em04LjQ1IDExLjkzNGMtMi44NjggMC00Ljk2MS0xLjg2LTUuMDM5LTUuOTY3di0uMzFoMTBjMC01LjE5My0xLjkzOC03Ljk4My02LjU4OS03Ljk4My00LjU3NCAwLTcuODMgMy43Mi03LjgzIDkuMjIzIDAgNS41MDIgMy41NjcgOC4zNyA3LjkwOCA4LjM3IDMuNzIgMCA1LjgxNC0yLjMyNSA2LjUxMS01LjAzN2wtLjA3Ny0uMjMzYy0uNjk4LjY5OC0yLjE3IDEuOTM4LTQuODg0IDEuOTM4ek03OC40NSA5LjM3N2MyLjAxNSAwIDIuNDggMS43MDUgMi40OCA0LjI2M2wtNS43MzYuNTQyYy4zMS0zLjQxIDEuMzk1LTQuODA1IDMuMjU2LTQuODA1eiIvPjwvZz48L3N2Zz4=";
const signature = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNzVweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMTc1IDE3IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNzUgMTciIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNi41NDQsNi44MzRDNS4yNzQsNi4yMzUsNC4xNzcsNS43MTksNC4xNzcsNC43MmMwLTAuODE5LDAuNTI5LTEuNjQ2LDEuNzA4LTEuNjQ2CgkJCQljMC44NTYsMCwxLjg3MSwwLjI4NSwzLjE5MywwLjg5N2wxLjMxNy0yLjY0QzguODY2LDAuNDM1LDcuMjk5LDAsNS42MDUsMEMyLjMxOCwwLDAuMzU2LDEuNzczLDAuMzU2LDQuNzQxCgkJCQlzMi4yOTUsNC4xMTMsNC4xMzksNS4wMzVjMS4zMzgsMC42NjgsMi40OTMsMS4yNDYsMi40OTMsMi4zMzRjMCwwLjkzOC0wLjgzMiwxLjU2OC0yLjA2OSwxLjU2OAoJCQkJYy0wLjk5MiwwLTIuMjAzLTAuMzY1LTMuNjAxLTEuMDg4TDAsMTUuNDE4YzEuNzY3LDEuMDA3LDMuMzgxLDEuNDU2LDUuMjI2LDEuNDU2YzMuNDE0LDAsNS40NTMtMS45LDUuNDUzLTUuMDgzCgkJCQlDMTAuNjc5LDguNzgxLDguMzg2LDcuNzAxLDYuNTQ0LDYuODM0eiBNMTcuNTU4LDEuODk5Yy0xLjQyOSwwLTMuNTc5LDAtNC44MTksMC4wNDJ2MTQuNjE0aDMuNjI2di00LjQ1OGgxLjEwMgoJCQkJYzEuNjUsMCw1LjQ4OS0wLjUzNCw1LjQ4OS01LjQ4NkMyMi45NTYsMy41NzIsMjEuMDM5LDEuODk5LDE3LjU1OCwxLjg5OXogTTE3LjQ0NCw5LjM1NGMtMC40NTYsMC0wLjc1NywwLTEuMDMzLTAuMDIzCgkJCQlsLTAuMDQ3LTAuMDA0VjQuNjY1bDAuMDQ3LTAuMDAzYzAuMzIxLTAuMDIyLDAuNzQxLTAuMDIyLDEuMDc3LTAuMDIyYzEuNjc4LDAsMi4wMTUsMC45NjksMi4wMTUsMi41MzIKCQkJCUMxOS41MDUsOC42ODIsMTguODY5LDkuMzU0LDE3LjQ0NCw5LjM1NHogTTMzLjQ3OCwxMC44OTlsMC4wMzYtMC4wMjdjMS4yMDktMC45NjYsMS44NzUtMi40NjEsMS44NzUtNC4yMDkKCQkJCWMwLTMuNTEzLTIuOTkyLTQuNzY0LTUuNzkzLTQuNzY0Yy0xLjQyOSwwLTMuNTgsMC00LjgxOCwwLjA0MnYxNC42MTRoMy42MjZ2LTQuNDU4aDEuMTAyYzAuMjIsMCwwLjQyOC0wLjAxMiwwLjYxOS0wLjAyNAoJCQkJbDAuMDMtMC4wMDNsMC4wMTYsMC4wMjVjMC42MDIsMC45NjUsMS4zNjksMi41MTksMS42MTYsNC40NmMwLjc5NSwwLDMuOTY3LDAsMy45NjcsMGMtMC4zMzYtMi4yMzQtMS41NTItNC40NzctMi4yNTEtNS42MTkKCQkJCUwzMy40NzgsMTAuODk5eiBNMjkuNDgyLDkuMzU0Yy0wLjQ1NiwwLTAuNzU2LDAtMS4wMzItMC4wMjFsLTAuMDQ3LTAuMDA0VjQuNjY3bDAuMDQ3LTAuMDAzCgkJCQljMC4zMjEtMC4wMjMsMC43NDEtMC4wMjMsMS4wNzctMC4wMjNjMS42NzgsMCwyLjAxNSwwLjk3LDIuMDE1LDIuNTM0QzMxLjU0Miw4LjY4MiwzMC45MDcsOS4zNTQsMjkuNDgyLDkuMzU0eiBNMzguMDQ3LDE2LjU1NQoJCQkJbDMuNjIyLDAuMDAyVjEuOTIyaC0zLjYyMlYxNi41NTV6IE01My4xNjIsMTEuNDk3TDQ4LjgyLDEuOTIxaC0zLjk2NHYxNC42MzNoMy4xOTFWNy4zMjNsNC41MDMsOS4yMzFoMy44MjFWMS45MjFoLTMuMjA5CgkJCQlDNTMuMTYyLDEuOTIxLDUzLjE2MiwxMS40OTcsNTMuMTYyLDExLjQ5N3ogTTY1LjEsMTEuMDQ5aDEuNTA5djIuOTlsLTAuMDM0LDAuMDEyYy0wLjM2NCwwLjEzMS0xLjIzMywwLjItMS41OTUsMC4yCgkJCQljLTEuOTE1LDAtMi42NjItMS40MTktMi42NjItNS4wNjJjMC0zLjIsMS4xMDItNC43NTYsMy4zNjktNC43NTZjMC43NTcsMCwxLjg2MiwwLjMzOSwzLjAzOSwwLjkzMmwwLjk4Mi0yLjQ0CgkJCQlDNjguMzkyLDIuMDk1LDY2LjY3OSwxLjYsNjUuMTE2LDEuNmMtMi4xOTgsMC0zLjc4MiwwLjYxOS00Ljg0NCwxLjg5M2MtMS4wNTMsMS4yNjUtMS41NjYsMy4xNDItMS41NjYsNS43MzkKCQkJCWMwLDUuNjcxLDEuNjQ1LDcuNzc5LDYuMDY2LDcuNzc5YzEuNDA4LDAsMy41MjgtMC4zNjYsNS4xMDctMS4xODNWOC41NTRINjUuMVYxMS4wNDl6IE03NS44MjIsMTAuNDg3aDQuNzAxVjcuNjU4aC00LjcwMVY0Ljc3MwoJCQkJaDUuMTM0VjEuOTIxaC04LjYwM3YxMi4wNDVjMCwwLjAxMy0wLjAyMSwxLjE1OCwwLjczNSwxLjk0MmMwLjQ3MiwwLjQ5MSwxLjE0NiwwLjc0MSwyLjAwMiwwLjc0NgoJCQkJYzIuNjM4LDAuMDE1LDUuNTI3LTAuMDgyLDUuOTM0LTAuMDk3di0yLjg1OGgtNS4yMDN2LTMuMjEySDc1LjgyMnogTTkyLjQxNiwxMC45MzdsLTAuMDI0LTAuMDM4bDAuMDM2LTAuMDI3CgkJCQljMS4yMDktMC45NjYsMS44NzUtMi40NjEsMS44NzUtNC4yMDljMC0zLjUxMy0yLjk5Mi00Ljc2NC01Ljc5Mi00Ljc2NGMtMS40MjksMC0zLjU4LDAtNC44MTgsMC4wNDJ2MTQuNjE0aDMuNjI2di00LjQ1OGgxLjEwMgoJCQkJYzAuMjIsMCwwLjQyNy0wLjAxMiwwLjYxOS0wLjAyNGwwLjAzLTAuMDAzbDAuMDE2LDAuMDI1YzAuNjAyLDAuOTY1LDEuMzY5LDIuNTE5LDEuNjE2LDQuNDZjMC43OTUsMCwzLjk2NywwLDMuOTY3LDAKCQkJCUM5NC4zMzEsMTQuMzIyLDkzLjExNSwxMi4wNzksOTIuNDE2LDEwLjkzN3ogTTg4LjM5Niw5LjM1NGMtMC40NTYsMC0wLjc1NiwwLTEuMDMyLTAuMDIxbC0wLjA0Ny0wLjAwNFY0LjY2N2wwLjA0Ny0wLjAwMwoJCQkJYzAuMzIxLTAuMDIzLDAuNzQxLTAuMDIzLDEuMDc3LTAuMDIzYzEuNjc4LDAsMi4wMTYsMC45NywyLjAxNiwyLjUzNEM5MC40NTcsOC42ODIsODkuODIyLDkuMzU0LDg4LjM5Niw5LjM1NHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwOS4xNTMsMTEuNTk1TDEwMy44MiwwLjE1aC00LjIzdjE2LjQwNWgzLjMyOGwwLjAwMS0xMS4zMjFsNS4yOTIsMTEuMzIxaDQuMjg4VjAuMTVoLTMuMzQ2VjExLjU5NXoKCQkJCSBNMTI3LjQxNCw0LjkwNGgzLjI2N3YxMS42NTFoMy43NzhWNC45MDRoMi43ODRWMS45MmgtOS44MjlWNC45MDR6IE0xNDYuOCwxMS42NjZjMCwxLjQ5OC0wLjA4NSwyLjQxNS0xLjc1MywyLjQxNQoJCQkJYy0xLjU5OSwwLTEuODY5LTAuNzUyLTEuODY5LTIuNDM3VjEuOTIxaC0zLjc1NHY5LjkyYzAsMy40OTEsMS42ODUsNS4wNDgsNS40NjMsNS4wNDhjMy44NjcsMCw1LjY2OC0xLjc3MSw1LjY2OC01LjU3NFYxLjkyMQoJCQkJSDE0Ni44QzE0Ni44LDEuOTIxLDE0Ni44LDExLjY2NiwxNDYuOCwxMS42NjZ6IE0xNjkuNzk3LDEzLjY5OXYtMy4yMTNoNC43VjcuNjU3aC00LjdWNC43NzJoNS4xMzRWMS45MjFoLTguNjAydjEyLjA0NQoJCQkJYzAsMC4wMTMtMC4wMjEsMS4xNTgsMC43MzUsMS45NDJjMC40NzIsMC40OTEsMS4xNDYsMC43NDEsMi4wMDIsMC43NDZjMi42MzcsMC4wMTUsNS41MjctMC4wODIsNS45MzQtMC4wOTd2LTIuODU4SDE2OS43OTd6CgkJCQkgTTExOC4xMjcsMS45MjFsLTMuNTQ0LDE0LjYzNGgzLjY5OWwwLjUyMS0yLjMyNGg0LjA1NWwwLjUyMSwyLjMyNGgzLjkwMWwtMy40OTgtMTQuNjM0CgkJCQlDMTIzLjc4MiwxLjkyMSwxMTguMTI3LDEuOTIxLDExOC4xMjcsMS45MjF6IE0xMTkuMjMsMTEuNDY2bDEuNTA3LTYuMzY0aDAuMTUxbDEuNTQyLDYuMzY0SDExOS4yM3ogTTE2MS45MzYsMTAuODk5bDAuMDM1LTAuMDI3CgkJCQljMS4yMDgtMC45NjYsMS44NzUtMi40NjEsMS44NzUtNC4yMDljMC0zLjUxMy0yLjk5Mi00Ljc2NC01Ljc5My00Ljc2NGMtMS40MjksMC0zLjU4LDAtNC44MTgsMC4wNDJ2MTQuNjE0aDMuNjI2di00LjQ1OGgxLjEwMgoJCQkJYzAuMjIsMCwwLjQyNy0wLjAxMiwwLjYxOS0wLjAyNGwwLjAzLTAuMDAzbDAuMDE2LDAuMDI1YzAuNjAyLDAuOTY1LDEuMzY5LDIuNTE5LDEuNjE3LDQuNDZjMC43OTQsMCwzLjk2NywwLDMuOTY3LDAKCQkJCWMtMC4zMzYtMi4yMzQtMS41NTItNC40NzctMi4yNTEtNS42MTlMMTYxLjkzNiwxMC44OTl6IE0xNTcuOTQxLDkuMzU0Yy0wLjQ1NiwwLTAuNzU2LDAtMS4wMzMtMC4wMjFsLTAuMDQ3LTAuMDA0VjQuNjY3CgkJCQlsMC4wNDctMC4wMDNjMC4zMjEtMC4wMjMsMC43NC0wLjAyMywxLjA3Ny0wLjAyM2MxLjY3OCwwLDIuMDE1LDAuOTcsMi4wMTUsMi41MzRDMTYwLjAwMSw4LjY4MiwxNTkuMzY2LDkuMzU0LDE1Ny45NDEsOS4zNTR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=";
const Footer = () => {
  return (
    <Flex
      bg={"#2f2f2f"}
      py={"24px"}
      px={["16px", "16px", "80px", "80px"]}
      flexDirection={"column"}
    >
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        gap={["1.2rem", "1.2rem"]}
        width={"100%"}
        borderBottom={"solid #555 1px"}
        paddingBottom={"24px"}
        marginBottom={"24px"}
      >
        <Box>
          <img src={natureProfile} alt="" />
        </Box>

        <Flex
          color={"#ffffff"}
          ml={["none", "none", "auto"]}
          gap={"1rem"}
          fontSize={"16px"}
          alignItems={"center"}
        >
          <Text _hover={{ textDecoration: "underline" }}>About us</Text>
          <Text _hover={{ textDecoration: "underline" }}>Press releases</Text>
          <Text _hover={{ textDecoration: "underline" }}>Press office</Text>
          <Text _hover={{ textDecoration: "underline" }}>Contact us</Text>
        </Flex>
        <Flex gap={"1rem"} alignItems={"center"}>
          <Icon as={ImFacebook2} color={"#ffffff"} />
          <Icon as={FaXTwitter} color={"#ffffff"} />
          <Icon as={FaYoutube} color={"#ffffff"} />
        </Flex>
      </Flex>
      <Box>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
          pb={"24px"}
        >
          <GridItem>
            <Text
              color={"#eeeeee"}
              fontSize={"17px"}
              fontWeight={"bold"}
              mb={"16px"}
            >
              Discover content
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Journals A-Z
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Articles by subject
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Nano
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Protocol Exchange
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Nature Index
            </Text>
          </GridItem>

          <GridItem>
            <Text
              color={"#eeeeee"}
              fontSize={"17px"}
              fontWeight={"bold"}
              mb={"16px"}
            >
              Publishing policies
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Nature portfolio policies
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Open access
            </Text>
          </GridItem>

          <GridItem>
            <Text
              color={"#eeeeee"}
              fontSize={"17px"}
              fontWeight={"bold"}
              mb={"16px"}
            >
              Publishing policies
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Reprints & permissions
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Research data
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Language editing
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Scientific editing
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Nature Masterclasses
            </Text>
            <Text
              fontSize={"14px"}
              color={"#eeeeee"}
              mb={"4px"}
              _hover={{ textDecoration: "underline" }}
            >
              Nature Research Academies
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Flex py={"32px"} flexDirection={"column"}>
          <Flex flexWrap={"wrap"} lineHeight={2} py={"32px"}>
            <Text fontSize={"18px"} mr={"24px"} textDecoration={"underline"} color={"#ffffff"}> 
            Manage cookies / Do not sell my data 
            </Text>
            <Text fontSize={"18px"} mr={"24px"} textDecoration={"underline"} color={"#ffffff"}> 
            Accessibility statement
            </Text>
            <Text fontSize={"18px"} mr={"24px"} textDecoration={"underline"} color={"#ffffff"}> 
            Privacy policy
            </Text>
          </Flex>
          <Flex>
            <img src={signature} alt="" height={"20px"} width={"200px"}/>
          </Flex>
          <Text color={"#ffffff"} fontSize={"16px"}>© 2024 Springer Nature</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
