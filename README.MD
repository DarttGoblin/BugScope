Bug Predictor Interface

This web interface allows users to upload software files and automatically predict whether they are high-risk or defect-free.

How it works:

Upload one or multiple code files.

The system extracts code metrics from each file.

The trained machine learning model predicts if the file is likely defective.

Results are displayed in a clear table with risk indicators.

Requirements:

Python 3.x

Flask / FastAPI (or any chosen web framework)

Joblib for loading the trained model (bug_predictor_xgb.pkl)