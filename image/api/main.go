package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type Response struct {
	Value string `json:"value"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	var buf bytes.Buffer
	enc := json.NewEncoder(&buf)
	res := Response{"hello"}
	if err := enc.Encode(res); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	fmt.Fprintf(w, buf.String())
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
