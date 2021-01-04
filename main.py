import pdfkit




if __name__ == "__main__":
    pdfkit.from_file('index.html', 'nicoll.pdf')