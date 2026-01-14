// Lưu ý: Import đúng thư viện JUnit 5 (Jupiter)
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class StudentAnalyzerTest {

    // --- TEST CHO HÀM ĐẾM HỌC SINH GIỎI ---

    @Test
    public void testCountExcellentStudents_NormalCase() {
        StudentAnalyzer analyzer = new StudentAnalyzer();
        // Danh sách có: 2 giỏi (9.0, 8.5), 1 khá (7.0), 1 sai (>10), 1 sai (<0)
        List<Double> scores = Arrays.asList(9.0, 8.5, 7.0, 11.0, -1.0);
        assertEquals(2, analyzer.countExcellentStudents(scores), "Phải đếm được 2 học sinh giỏi");
    }

    @Test
    public void testCountExcellentStudents_EmptyList() {
        StudentAnalyzer analyzer = new StudentAnalyzer();
        assertEquals(0, analyzer.countExcellentStudents(Collections.emptyList()), "Danh sách rỗng phải trả về 0");
    }

    @Test
    public void testCountExcellentStudents_AllInvalid() {
        StudentAnalyzer analyzer = new StudentAnalyzer();
        // Toàn điểm sai
        List<Double> scores = Arrays.asList(-5.0, 15.0, 10.1);
        assertEquals(0, analyzer.countExcellentStudents(scores), "Không có điểm hợp lệ nào nên kết quả là 0");
    }

    @Test
    public void testCountExcellentStudents_Boundary() {
        StudentAnalyzer analyzer = new StudentAnalyzer();
        // Kiểm tra đúng biên 8.0 (là giỏi) và 7.9 (không giỏi)
        List<Double> scores = Arrays.asList(8.0, 7.9, 10.0);
        assertEquals(2, analyzer.countExcellentStudents(scores), "8.0 và 10.0 là giỏi, 7.9 thì không");
    }

    // --- TEST CHO HÀM TÍNH TRUNG BÌNH ---

    @Test
    public void testCalculateValidAverage_NormalCase() {
        StudentAnalyzer analyzer = new StudentAnalyzer();
        // Hợp lệ: 9.0, 8.5, 7.0 => Tổng 24.5 / 3 = 8.1666...
        // Không hợp lệ: 11.0, -1.0
        List<Double> scores = Arrays.asList(9.0, 8.5, 7.0, 11.0, -1.0);
        
        // Dùng delta 0.01 để so sánh số thực
        assertEquals(8.166, analyzer.calculateValidAverage(scores), 0.01);
    }

    @Test
    public void testCalculateValidAverage_EmptyList() {
        StudentAnalyzer analyzer = new StudentAnalyzer();
        assertEquals(0.0, analyzer.calculateValidAverage(Collections.emptyList()));
    }

    @Test
    public void testCalculateValidAverage_AllInvalid() {
        StudentAnalyzer analyzer = new StudentAnalyzer();
        List<Double> scores = Arrays.asList(-1.0, 20.0);
        assertEquals(0.0, analyzer.calculateValidAverage(scores), "Không có điểm hợp lệ thì trung bình là 0");
    }
}