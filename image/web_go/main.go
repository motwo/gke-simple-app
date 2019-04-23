package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	res, err := http.Get("http://api")
	if err != nil {
		http.Error(w, err.Error(), 500)
	}
	defer res.Body.Close()
	b, err := ioutil.ReadAll(res.Body)
	if err != nil {
		http.Error(w, err.Error(), 500)
	}
	fmt.Fprintf(w, string(b))
	return
}
