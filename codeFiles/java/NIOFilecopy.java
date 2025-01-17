// 使用NIO进行快速的文件拷贝
public static void fileCopy( File in, File out )
 throws IOException  
    {  
        FileChannel inChannel = new FileInputStream( in ).getChannel();  
        FileChannel outChannel = new FileOutputStream( out ).getChannel();  
        try
        {  
            // inChannel.transferTo(0, inChannel.size(), outChannel);      
            // original -- apparently has trouble copying large files on Windows  
            // magic number for Windows, 64Mb - 32Kb)  
            int maxCount = (64 * 1024 * 1024) - (32 * 1024);  
            long size = inChannel.size();  
            long position = 0;  
            while ( position < size )  
            {  
               position += inChannel.transferTo( position, maxCount, outChannel );  
            }  
        }  
        finally
        {  
            if ( inChannel != null )  
            {  
               inChannel.close();  
            }  
            if ( outChannel != null )  
            {  
                outChannel.close();  
            }  
        }  
    }