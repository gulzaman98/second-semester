<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">


    <html>
        <body>
            
            <table border="2" cellpadding="10" cellspacing="2">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>image</th>
                </tr>

                <xsl:for-each select="aptech/student">
                
                <tr>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="email"/></td>
                    <td><xsl:value-of select="age"/></td>
                    <td><xsl:value-of select="city"/></td>
                    <td><xsl:value-of select="image"/></td>

                    

                    <td><img src='{image}' width='100' height='100' alt="watch image"/></td>

                </tr>
                

            </xsl:for-each>

            </table>



        </body>
    </html>




    </xsl:template>
</xsl:stylesheet>