# Görkem Sandıkcı - Full Stack Developer Portfolio

This project is a personal portfolio website for Görkem Sandıkcı, showcasing his skills, projects, and experience as a Full Stack Developer.

## Technologies Used

- **Backend**: Python with Flask framework
- **Frontend**: HTML5, CSS3, JavaScript
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Roboto)

## Features

- Responsive design for various screen sizes
- Animated sections using GSAP
- Smooth scrolling navigation
- Skills showcase with animated progress bars
- Project showcase with hover effects
- Contact form (frontend only, backend integration required)

## Project Structure

- `app.py`: Flask application entry point
- `templates/index.html`: Main HTML template
- `static/css/style.css`: Custom CSS styles
- `static/js/animations.js`: GSAP animations
- `static/img/`: Directory for image assets

## Setup and Running

1. Clone the repository:
   ```
   git clone https://github.com/gorkemsandikci/portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Create and activate a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

4. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

5. Run the Flask application:
   ```
   python app.py
   ```

6. Open your browser and visit `http://localhost:5000`

## Customization

To customize this portfolio for your own use:

1. Update the personal information in `templates/index.html`
2. Modify the styles in `static/css/style.css` to match your preferred color scheme
3. Add your own projects to the "Projects" section in `templates/index.html`
4. Update the skills and their respective levels in `templates/index.html`
5. Replace the image files in `static/img/` with your own

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/gorkemsandikci/portfolio/issues) if you want to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.