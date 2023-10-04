package package_mamy;
import robocode.*;
import java.awt.Color;

public class MAMY extends Robot
{
	public void run() {
		setBodyColor(Color.black);
		setGunColor(Color.pink);
		setRadarColor(Color.white);
		setBulletColor(Color.red);

		while(true) {
			ahead(100);
			turnGunRight(360);
			turnRight(100);
			turnGunRight(360);
			back(100);
			turnGunRight(360);
			turnLeft(100);
			turnGunRight(360);
		}
	}
	
	public void onScannedRobot(ScannedRobotEvent e) {
		double distanceCible = e.getDistance();

        if (distanceCible < 300) {
			setBodyColor(Color.red);
			setGunColor(Color.red);
			setRadarColor(Color.red);
        } else {
			setBodyColor(Color.black);
			setGunColor(Color.pink);
			setRadarColor(Color.white);
		}
		
		fire(3);
	}

	public void onHitByBullet(HitByBulletEvent e) {
		back(50);
	}
	
	public void onHitWall(HitWallEvent e) {
		back(100);
		turnRight(100);
		ahead(100);
	}	
}
