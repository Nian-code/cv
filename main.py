import pdfkit



if __name__ == "__main__":
    pdfkit.from_url('https://pypi.org/project/pdfkit/', 'out.pdf')