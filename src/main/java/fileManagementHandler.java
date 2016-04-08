/**
 * Created by austin on 3/24/16.
 */

import static spark.Spark.*;
import org.eclipse.jetty.websocket.api.*;
import org.eclipse.jetty.websocket.api.annotations.*;

@WebSocket
public class fileManagementHandler {
    private fileStructure newStructure;

    @OnWebSocketConnect
    public void creator(Session session){
        newStructure = new fileStructure();
        newStructure.createStructure();
    }
    @OnWebSocketClose
    public void destructor(int closeCode, String closeReason){
        newStructure.deleteStructure();
        System.out.println("Destructor: websocket closed with:" + closeReason + " " + closeCode);
    }
}

