<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <style>
          .container { display:flex; flex-wrap:wrap; gap:20px; padding:20px; }
          .card { width:250px; border:2px solid #333; border-radius:10px; padding:15px; text-align:center; background:#f7f7f7; box-shadow:2px 2px 5px gray; }
          .card img { width:100%; height:180px; object-fit:cover; border-radius:10px; margin-bottom:10px; }
          .info { text-align:left; margin-top:10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <xsl:for-each select="aptech/car">
            <div class="card">
              <img src="{image}" />
              <div class="info">
                <p><b>Name:</b> <xsl:value-of select="name"/></p>
                <p><b>Brand:</b> <xsl:value-of select="brand"/></p>
                <p><b>Year:</b> <xsl:value-of select="year"/></p>
              </div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
