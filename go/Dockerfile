FROM golang:latest AS builder
WORKDIR /usr/src/app
COPY go.mod go.sum ./
RUN go mod tidy
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /usr/local/bin/app
FROM gcr.io/distroless/static:nonroot
COPY --from=builder /usr/local/bin/app /usr/local/bin/app
USER nonroot:nonroot
ENTRYPOINT ["/usr/local/bin/app"]
EXPOSE 8080
CMD ["app"]