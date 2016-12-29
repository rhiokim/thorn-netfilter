# Thorn Netfitler

## How to run

```
# clone the repository to your system

$ cd /path/to/thorn-netfilter
$ npm install
$ npm start
```

## Examples

`iptables -A INPUT -d 172.17.0.2 -p icmp -j DROP`
```
$ curl -X PUT \
-H "Content-Type: application/json" \
-d '{
  "chain": "INPUT",
  "protocol": "icmp",
  "destination": "172.17.0.2",
  "jump": "DROP"
}' "http://192.168.99.100:8082/iptables/append"
```

`iptables -D INPUT -d 172.17.0.2 -p icmp -j DROP`
```
$ curl -X PUT \
-H "Content-Type: application/json" \
-d '{
  "chain": "INPUT",
  "protocol": "icmp",
  "destination": "172.17.0.2",
  "jump": "DROP"
}' "http://192.168.99.100:8082/iptables/delete"
```

## LICENSE
The MIT License (MIT)

Copyright (c) Rhio Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
